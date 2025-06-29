import { Component } from '@angular/core';
import { VendorService } from '../vendor.service';
import { NgFor, NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor-list',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf],
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.scss'
})
export class VendorListComponent {
   users: any[] = [];
   gridColumns:any[]=[]
   gridData:any[]=[]
   showEditModal = false;
   selectedUserName = '';
    loading = true;
constructor(private vendorService : VendorService){}
ngOnInit(){
  this.loading = true;
  this.vendorService.getUsers().subscribe((data)=>{
    this.users=data
    this.gridColumns= data.grid_columns
    this.gridData=data.grid_data
    console.log(this.users)
    this.loading = false;
  })
}
// getField(field: string): boolean {
//   return this.gridColumns.some(col => col.column_name === field);
// }
getInitials(name: any): string {
  return `${name.first_name.charAt(0)}${name.last_name.charAt(0)}`.toUpperCase();
}
editUser(user: any) {
  this.selectedUserName = `${user.name.first_name} ${user.name.last_name}`;
  this.showEditModal = true;
}
closeEditModal() {
  this.showEditModal = false;
}

deleteUser(user: any) {
  const fullName = `${user.name.first_name} ${user.name.last_name}`;
  const confirmed = window.confirm(`Are you sure you want to delete ${fullName}?`);
  if (confirmed) {
    this.gridData = this.gridData.filter(u => u !== user);
  }
}
isAllSelected(): boolean {
  return this.gridData && this.gridData.length > 0 && this.gridData.every(u => u.selected);
}
toggleAllSelection(event: Event): void {
  const checked = (event.target as HTMLInputElement).checked;
  this.gridData.forEach(u => u.selected = checked);
}
}
