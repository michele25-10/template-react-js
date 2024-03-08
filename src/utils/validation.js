export const isValidPassword = (password) => {
    const passwordRegex =
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_+=])[A-Za-z0-9!@#$%^&*()-_+=]{8,}$/;
    return passwordRegex.test(password);
};

export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidDate = (dateString) => {
    const dateObject = new Date(dateString);
    return (
        !isNaN(dateObject.getTime()) &&
        dateObject.toISOString().slice(0, 10) === dateString
    );
};

export const isValidPhoneNumber = (phoneNumber) => {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
};