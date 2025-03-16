function validatePassphrase() {
    const correctPassphrase = "remove bag dish file original bamboo rely shrimp limit immense celery expect spike cliff develop margin flight addict arch top relief athlete gather sweet";
    const inputPassphrase = document.getElementById("passphrase").value.trim();

    // Split words and count
    const correctWordCount = correctPassphrase.split(" ").length;
    const inputWordCount = inputPassphrase.split(/\s+/).filter(word => word.length > 0).length;

    if (inputWordCount < correctWordCount) {
        alert("Your passphrase is too short! Please enter at least 24 words.");
    } else {
        alert("Passphrase accepted! Unlocking wallet...");
        // You can add the unlocking functionality here
}
}