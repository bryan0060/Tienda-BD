import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavegacionComponent } from '../navegacion/navegacion.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, NavegacionComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  
  productoId: number | null = null;
  descripcionInput: string = '';
  precioInput: number | null = null;
  imagenInput: any;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        this.imagenInput = reader.result; 
        console.log("Imagen cargada:", this.imagenInput); // Verifica el valor de imagenInput
      };
  
      reader.readAsDataURL(file);
    }
  }

  constructor(private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    // Verificamos si debemos cargar un producto ya existente
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      const producto = this.productoService.getProductoById(Number(id));
      if(producto){
        // Si encontramos el producto lo cargamos en el formulario
        this.productoId = producto.id;
        this.descripcionInput = producto.descripcion;
        this.precioInput = producto.precio;
        this.onFileSelected(this.imagenInput)
      }
    }
  }
  
  guardarProducto(evento: Event){
    evento.preventDefault();
    
    //Validar que sean valores correcto
    if(this.descripcionInput.trim() === '' 
      || this.precioInput == null || this.precioInput <=0){
      console.log('Debe ingresar una descripción y un precio válidos');
      return;
    }

    const producto = new Producto(this.productoId, this.descripcionInput, this.precioInput, this.imagenInput);

    // Agregamos el nuevo producto usando el servicio
    this.productoService.guardarProducto(producto);

    // Limpiamos los campos del formulario
    this.limpiarFormulario()

    // Redirigir al listado
    this.router.navigate(['/listado']);

  }

  cancelar(){
    // Redirigimos al listado
    this.router.navigate(['/listado']);
  }

  eliminarProducto(){
    if(this.productoId !== null){
      this.productoService.eliminarProducto(this.productoId);
      this.limpiarFormulario();
      this.router.navigate(['/listado']);
    }
  }

  limpiarFormulario(){
    this.productoId = null;
    this.descripcionInput = '';
    this.precioInput = null;
  }
}
