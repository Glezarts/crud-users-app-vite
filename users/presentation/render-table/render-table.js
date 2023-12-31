import usersStore from '../../store/users-store'
import './render-table.css'


let table;
const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
        `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders,tableBody)

        return table;
}

export const renderTable = (element) => {

    const users = usersStore.getUser();
    if (!table) {
        table = createTable();
        element.append( table );

        //TODO: Listeners
    }

    let tableHTML = '';
    users.forEach(user => {
        tableHTML += `
        <tr>
            <td>${ user.id }</td>
            <td>${ user.balance }</td>
            <td>${ user.firstName }</td>
            <td>${ user.lastName }</td>
            <td>${ user.isActive }</td>
            <td>
            <a href="#" >Select</a>
            |
            <a href="#" >SDelete</a>

            </td>
        </tr>
        `
        table.querySelector('tbody').innerHTML = tableHTML;

    })

}