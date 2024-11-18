export class Producto{
    constructor(
        public id: number | null = null,
        public descripcion: string,
        public precio: number,
        public imagen: any
    ){}
}