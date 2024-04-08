import { Component, Input, OnInit } from '@angular/core';

interface ResizeSource {
  media: string;
  srcset: string;
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  public resizeSources : Array<ResizeSource> = [];
  @Input() public source !: string;
  @Input() public alt !: string;

  constructor() { }

  ngOnInit(): void {
    this._setResizeSources();
  }

  private _setResizeSources():void{
    // directorio donde se encuentran las imagenes
    const dir = 'compress';
    // dividiendo el path original y creando un arreglo
    const splitPacth = this.source.split('/');
    // eliminando y obteniendo el ultimo elemento del arreglo (nombre archivo) 
    const fullNameImage = splitPacth.pop();
    // agregando directorio donde se encuentran los archivos comprimidos
    splitPacth.push(dir);
    // uniendo el arreglo dividido para formar el nuevo path
    const newPath = splitPacth.join('/');
    // obteneindo el nombre y la extension
    const [name, extension] = fullNameImage?.split('.') ?? [];
    // analizando que los nombres no sean indefinidos
    if(!name || !extension) throw  Error('[image.componente] imagen name or imagen extension is undefined');

    this.resizeSources = [
      {
        media: '(min-width: 2000px)',
        srcset: `${newPath}/${name}-large.webp`,
      },
      {
        media: '(min-width: 640px)',
        srcset: `${newPath}/${name}-medium.webp`,
      },
      {
        media: '(min-width: 200px)',
        srcset: `${newPath}/${name}-small.webp`,
      },
      {
        media: '(min-width: 2000px)',
        srcset: `${newPath}/${name}-large.${extension}`,
      },
      {
        media: '(min-width: 640px)',
        srcset: `${newPath}/${name}-medium.${extension}`,
      },
      {
        media: '(min-width: 200px)',
        srcset: `${newPath}/${name}-small.${extension}`,
      },
    ];
  }

}
