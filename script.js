document.addEventListener('DOMContentLoaded', () => {
    const startOnboardingBtn = document.getElementById('startOnboarding');
    const onboardingModal = document.getElementById('onboardingModal');
    const closeModal = document.querySelector('.close');
    const learnMoreBtn = document.getElementById('learnMore');
    const nextStep1Btn = document.getElementById('nextStep1');
    const userForm = document.getElementById('userForm');
    const connectWalletBtn = document.getElementById('connectWallet');
    const stakeTokensBtn = document.getElementById('stakeTokens');
    const exploreDashboardBtn = document.getElementById('exploreDashboard');
    const progress = document.getElementById('progress');
    let currentStep = 1;

    // Show onboarding modal
    startOnboardingBtn.addEventListener('click', () => {
        onboardingModal.style.display = 'block';
        updateProgress();
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        onboardingModal.style.display = 'none';
        resetOnboarding();
    });

    // Learn more link to X post
    learnMoreBtn.addEventListener('click', () => {
        window.open('https://x.com/DJohnstonEC/status/1887195295983051190', '_blank');
    });

    // Navigate to next step
    nextStep1Btn.addEventListener('click', () => {
        showStep(2);
    });

    // Handle user form submission
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showStep(3);
    });

    // Simulate wallet connection
    connectWalletBtn.addEventListener('click', () => {
        alert('Connecting to Web3 wallet... (Simulated)');
        showStep(4);
    });

    // Simulate staking tokens
    stakeTokensBtn.addEventListener('click', () => {
        alert('Staking MOR tokens to increase Brain Power... (Simulated)');
        showStep(5);
    });

    // Show dashboard
    exploreDashboardBtn.addEventListener('click', () => {
        onboardingModal.style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    });

    // Function to show specific step
    function showStep(step) {
        const steps = document.querySelectorAll('.step');
        steps.forEach(s => s.style.display = 'none');
        document.querySelector(`.step[data-step="${step}"]`).style.display = 'block';
        currentStep = step;
        updateProgress();
    }

    // Update progress bar
    function updateProgress() {
        const progressPercentage = (currentStep / 5) * 100;
        progress.style.width = `${progressPercentage}%`;
    }

    // Reset onboarding
    function resetOnboarding() {
        currentStep = 1;
        showStep(1);
        progress.style.width = '0%';
    }

    // Simulate Brain Power updates (for demo purposes)
    document.getElementById('brainPower').textContent = '500 BP';
    document.getElementById('dashboardBrainPower').textContent = '500 BP';
    document.getElementById('dashboardBrainPowerLive').textContent = '500 BP';
});
