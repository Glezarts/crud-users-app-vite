import './style.css'
import { UsersApp } from './users/users-app'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>CRUD users app</h1>
    <div class="card">
    </div>


  </div>
`
const element = document.querySelector('.card');

UsersApp( element );

