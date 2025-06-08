document.addEventListener('DOMContentLoaded', () => {
    // --- Q&A Toggle Functionality ---
    const qaItems = document.querySelectorAll('.qa-item');

    qaItems.forEach(item => {
        const questionButton = item.querySelector('.qa-question');
        const answerDiv = item.querySelector('.qa-answer');

        if (questionButton && answerDiv) {
            questionButton.addEventListener('click', () => {
                const isActive = answerDiv.classList.contains('active');

                // Optional: Close other active answers if you want only one open at a time
                // if (!isActive) { // Only close others if we are opening this one
                //     document.querySelectorAll('.qa-answer.active').forEach(activeAnswer => {
                //         activeAnswer.classList.remove('active');
                //         if (activeAnswer.previousElementSibling) {
                //            activeAnswer.previousElementSibling.classList.remove('active');
                //         }
                //     });
                // }

                answerDiv.classList.toggle('active');
                questionButton.classList.toggle('active');
            });
        }
    });

    // --- Smooth Scrolling for anchor links (if you add them later) ---
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if (targetElement) {
    //             targetElement.scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });
});
