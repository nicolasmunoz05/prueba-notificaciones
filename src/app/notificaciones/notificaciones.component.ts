import { Component } from '@angular/core';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {
  notifications = [
    { title: 'Notificación 1', description: 'Descripción de la notificación 1', read: false, date: new Date() },
    { title: 'Notificación 2', description: 'Descripción de la notificación 2', read: false, date: new Date() },
  ];

  newNotification = { title: '', description: '' };
  dropdownOpen = false;
  titlePlaceholder = "Título";
  descriptionPlaceholder = "Descripción";

  get unreadCount() {
    return this.notifications.filter(n => !n.read).length;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  markAsRead(notification: any) {
    if (!notification.read) {
      notification.read = true;
    }
  }
  showErrors = false;

  addNotification(event: Event) {
    event.preventDefault();
    
    // Validación de campos
    if (!this.newNotification.title || !this.newNotification.description) {
      this.showErrors = true;
    } else {
      this.notifications.unshift({
        title: this.newNotification.title,
        description: this.newNotification.description,
        read: false,
        date: new Date()
      });

      // Limpiar campos
      this.newNotification = { title: '', description: '' };
      this.showErrors = false; // Restablece el estado de errores
    }
  }
  
  deleteNotification(notification: any) {
    this.notifications = this.notifications.filter(n => n !== notification); 
  }

  resetPlaceholder(field: string) {
    if (field === 'title') {
      this.titlePlaceholder = 'Título';
    } else if (field === 'description') {
      this.descriptionPlaceholder = 'Descripción';
    }
  }

}
