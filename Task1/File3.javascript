function submitVote() {
    const options = document.getElementsByName('vote');
    let selectedOption = null;

    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }

    const resultElement = document.getElementById('result');

    if (selectedOption) {
        resultElement.textContent = `You voted for: ${selectedOption}`;
    } else {
        resultElement.textContent = 'Please select an option before submitting.';
    }
}
