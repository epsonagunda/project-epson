async function ping() {
    const hostname = document.getElementById('hostname').value;
    const resultElement = document.getElementById('pingResult');

    // Basic validation
    if (!hostname) {
        resultElement.textContent = 'Please enter a hostname or IP.';
        return;
    }

    try {
        const response = await fetch(`/ping?hostname=${encodeURIComponent(hostname)}`);
        const result = await response.text();
        resultElement.textContent = result;
    } catch (error) {
        resultElement.textContent = 'Error: ' + error.message;
    }
}

document.getElementById("foot01").innerHTML =
"<p>&copy;  "+ new Date().getFullYear() + "  epsonagunda. All rights reserved.</p>";

