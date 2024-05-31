function insert_Row() {
    //Write your code here
	const table = document.getElementById('sampleTable');

    // Create a new row
    const newRow = table.insertRow(0); // Insert at the top (index 0)

    // Create two new cells for the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set the text content for the new cells
    cell1.textContent = 'New Cell1';
    cell2.textContent = 'New Cell2';
  
  
}
