import { Observable, Subject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

export enum IntersectionStatus {
  Visible = 'Visible',
  Pending = 'Pending',
  NotVisible = 'NotVisible',
}

interface SubjectInterceptionStatus {
  entry: IntersectionObserverEntry;
  observer: IntersectionObserver;
}

export const fromIntersectionObserver = ( element: HTMLElement, config: IntersectionObserverInit, debounce = 0 ) => {
  return new Observable<IntersectionStatus>((subscriber) => {
    
    const subject$ = new Subject<SubjectInterceptionStatus>();

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (isIntersecting(entry)) subject$.next({ entry, observer });
        });
      },
      config
    );

    subject$.subscribe(() => {
      subscriber.next(IntersectionStatus.Pending);
    });

    subject$
      .pipe(debounceTime(debounce), filter(Boolean))
      .subscribe(async ({ entry, observer }) => {
        const isEntryVisible = await isVisible(entry.target as HTMLElement);

        if (isEntryVisible) {
          subscriber.next(IntersectionStatus.Visible);
          observer.unobserve(entry.target);
        } else {
          subscriber.next(IntersectionStatus.NotVisible);
        }
      });

    intersectionObserver.observe(element);

    return {
      unsubscribe() {
        intersectionObserver.disconnect();
        subject$.unsubscribe();
      },
    };
  });
}
  

async function isVisible(element: HTMLElement) {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver(([entry]) => {
      resolve(entry.isIntersecting);
      observer.disconnect();
    });

    observer.observe(element);
  });
}

function isIntersecting(entry: IntersectionObserverEntry) {
  return entry.isIntersecting || entry.intersectionRatio > 0;
}