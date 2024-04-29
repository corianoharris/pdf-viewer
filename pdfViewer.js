
// Array of PDF file paths and their corresponding labels
const pdfData = [
    { path: "./pdfs/aglos.pdf", label: "algos" },
    { path: "./pdfs/angular-13.pdf", label: "angular 13" },
    { path: "./pdfs/consulting_proposal_template.pdf", label: "consulting" },
    { path: "./pdfs/javascript-deep.pdf", label: "javascript deep dive" },
    { path: "./pdfs/software-testing-craftsman.pdf", label: "software testing" },
];

 // Function to filter PDF options based on search query
 function filterPDFs(query) {
    const pdfSelect = document.getElementById('pdf-select');
    pdfSelect.innerHTML = ''; // Clear previous options

    pdfData.forEach(function(data) {
        // Check if the PDF path or label contains the search query
        if (data.path.toLowerCase().includes(query.toLowerCase()) || data.label.toLowerCase().includes(query.toLowerCase())) {
            // Create a new option element and append it to the select dropdown
            const option = document.createElement('option');
            option.textContent = data.label;
            option.value = data.path;
            pdfSelect.appendChild(option);
        }
    });
}

// Event listener for input change in the search input
document.getElementById('search-input').addEventListener('input', function(event) {
    const query = event.target.value;
    filterPDFs(query); // Filter PDF options based on search query
});

// Event listener for change in the selected option in the PDF select dropdown
document.getElementById('pdf-select').addEventListener('change', function(event) {
    const selectedPath = event.target.value;
    window.open(selectedPath, '_blank'); // Open selected PDF in new tab
});

// Initial call to filter PDFs with an empty query
filterPDFs('');
