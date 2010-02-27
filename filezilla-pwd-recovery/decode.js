function decrypt(numeric) {
	var decrypted = "";
	var encrypted = "";
	var secret = "FILEZILLA1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if (numeric.length % 3 == 0) {
		for (var i = 0; i < numeric.length; i += 3) {
			var charCode = parseInt(numeric.substr(i, 3), 10);
			encrypted += String.fromCharCode(charCode);
		}
		for (var i = 0; i < encrypted.length; i++) {
			var secretCharIndex = (encrypted.length + i) % secret.length;
			var numA = encrypted.charCodeAt(i);
			var numB = secret.charCodeAt(secretCharIndex);
			decrypted += String.fromCharCode(numA ^ numB);
		}
	} else {
		decrypted = "ERROR: Length must be multiple of 3.";
	}

	return decrypted;
}
function doDecrypt() {
	var resultArea = document.getElementById('result_area');
	var password = document.getElementById('password').value;
	resultArea.innerHTML = 'Recovered password: ' + decrypt(password);
}