import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from '../../service/manage-users.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: ManageUsersService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.error('Error fetching users:', error);
    });
  }
}
