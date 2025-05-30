document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("contactForm");
	const nameInput = document.getElementById("name");
	const emailInput = document.getElementById("email");
	const messageInput = document.getElementById("message");
	const nameError = document.getElementById("nameError");
	const emailError = document.getElementById("emailError");
	const messageError = document.getElementById("messageError");
	const successMessage = document.getElementById("successMessage");

	// Validation patterns
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// Show error message
	function showError(input, errorElement, message) {
		errorElement.textContent = message;
		errorElement.style.display = "block";
		input.classList.add("invalid");
	}

	// Hide error message
	function hideError(input, errorElement) {
		errorElement.textContent = "";
		errorElement.style.display = "none";
		input.classList.remove("invalid");
	}

	// Show success message
	function showSuccessMessage() {
		successMessage.style.display = "block";
		// Hide success message after 5 seconds
		setTimeout(() => {
			successMessage.style.display = "none";
		}, 5000);
	}

	// Reset form
	function resetForm() {
		form.reset();
		hideError(nameInput, nameError);
		hideError(emailInput, emailError);
		hideError(messageInput, messageError);
	}

	// Validate name
	function validateName() {
		const value = nameInput.value.trim();
		if (value.length < 2) {
			showError(
				nameInput,
				nameError,
				"Name must be at least 2 characters long"
			);
			return false;
		}
		hideError(nameInput, nameError);
		return true;
	}

	// Validate email
	function validateEmail() {
		const value = emailInput.value.trim();
		if (!emailPattern.test(value)) {
			showError(emailInput, emailError, "Please enter a valid email address");
			return false;
		}
		hideError(emailInput, emailError);
		return true;
	}

	// Validate message
	function validateMessage() {
		const value = messageInput.value.trim();
		if (value.length < 10) {
			showError(
				messageInput,
				messageError,
				"Message must be at least 10 characters long"
			);
			return false;
		}
		hideError(messageInput, messageError);
		return true;
	}

	// Add input event listeners for real-time validation
	nameInput.addEventListener("input", validateName);
	emailInput.addEventListener("input", validateEmail);
	messageInput.addEventListener("input", validateMessage);

	// Form submission handler
	form.addEventListener("submit", function (e) {
		e.preventDefault();

		const isNameValid = validateName();
		const isEmailValid = validateEmail();
		const isMessageValid = validateMessage();

		if (isNameValid && isEmailValid && isMessageValid) {
			// Form is valid, you can submit it here
			console.log("Form is valid, submitting...");

			// Simulate form submission (replace with actual submission logic)
			setTimeout(() => {
				showSuccessMessage();
				resetForm();
			}, 1000);
		}
	});

	// Reset form handler
	form.addEventListener("reset", function () {
		hideError(nameInput, nameError);
		hideError(emailInput, emailError);
		hideError(messageInput, messageError);
	});
});
