// Add copy buttons and language labels to code blocks
document.addEventListener('DOMContentLoaded', function () {
    const codeBlocks = document.querySelectorAll('pre code');
    const copyIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    const checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

    codeBlocks.forEach(function (codeBlock) {
        const pre = codeBlock.parentElement;

        // Extract language from class (e.g., language-js)
        let lang = 'code';
        codeBlock.classList.forEach(cls => {
            if (cls.startsWith('language-')) {
                lang = cls.replace('language-', '');
            }
        });
        pre.setAttribute('data-lang', lang);

        if (pre.parentElement.classList.contains('highlight-wrapper')) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'highlight-wrapper';
        pre.parentNode.insertBefore(wrapper, pre);
        wrapper.appendChild(pre);

        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = copyIcon;
        copyButton.setAttribute('aria-label', 'Copy code');

        copyButton.addEventListener('click', function () {
            const code = codeBlock.innerText || codeBlock.textContent;
            navigator.clipboard.writeText(code).then(function () {
                copyButton.innerHTML = checkIcon;
                copyButton.classList.add('clicked');
                setTimeout(function () {
                    copyButton.innerHTML = copyIcon;
                    copyButton.classList.remove('clicked');
                }, 2000);
            });
        });

        wrapper.appendChild(copyButton);
    });
});