(function() {
    // Default CSS styles for the toolbar buttons
    const toolbarStyles = `
        .sidebar-toolbar {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0px;
            left: 0px;
        }

        .toolbar-button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            color: var(--theme-highlight, #ffcc00);
            text-decoration: none;
            margin-right: 10px; /* Space between buttons */
            transition: opacity 0.3s ease;
        }

        .toolbar-button svg {
            width: 24px;
            height: 24px;
        }
    `;

    // Function to add CSS to the document
    function addStyles(css) {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    // Function to get the repository icon based on the repo URL
    function getRepoIcon(repoUrl) {
        if (repoUrl.includes('github.com')) {
            return `
                <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.7 7.7 0 012.01-.27c.68 0 1.36.09 2.01.27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
            `;
        } else if (repoUrl.includes('gitlab.com')) {
            return `
                <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.97 9.57L14 3.16a.82.82 0 00-1.55-.1l-1.52 4.85H5.07L3.55 3.05a.82.82 0 00-1.55.1l-2 6.4a.92.92 0 00.34 1.03l7.18 5.6c.28.22.67.22.95 0l7.18-5.6c.29-.23.41-.61.34-1.03z"/>
                </svg>
            `;
        } else {
            return `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.9 12c0-.8.6-1.4 1.4-1.4h8.5c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4H5.3c-.8 0-1.4-.6-1.4-1.4zM5.3 9.7h8.5c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7H5.3C4.4 6.3 3.7 7 3.7 7.9c0 .9.7 1.7 1.7 1.7zm14 6.7H10c-.9 0-1.7.7-1.7 1.7 0 .9.7 1.7 1.7 1.7h9.3c.8 0 1.4-.6 1.4-1.4s-.6-1.4-1.4-1.4zm0-10.7h-8.5c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4h8.5c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7zM18 12c0 .8-.6 1.4-1.4 1.4H7.2c-.9 0-1.7-.7-1.7-1.7 0-.9.7-1.7 1.7-1.7h9.3c.8 0 1.4.6 1.4 1.4z"/>
                </svg>
            `;
        }
    }

    // Docsify plugin function for the repository button
    function initRepoButton(hook, vm) {
        hook.mounted(function() {
            console.log("Docsify repository plugin mounted");

            // Insert toolbar styles
            if (!document.querySelector('#toolbar-styles')) {
                console.log("Adding toolbar styles");
                addStyles(toolbarStyles);
            }

            // Remove the default GitHub corner link if it exists
            const githubCorner = document.querySelector('.github-corner');
            if (githubCorner) {
                console.log("Removing default GitHub corner");
                githubCorner.remove();
            }

            // Ensure there's a shared toolbar container
            const toolbarContainer = document.querySelector('.sidebar-toolbar') || document.createElement('div');
            toolbarContainer.className = 'sidebar-toolbar';

            // Add the toolbar container to the sidebar if not already there
            if (!document.querySelector('.sidebar-toolbar')) {
                const sidebar = document.querySelector('.sidebar');
                if (sidebar) {
                    sidebar.appendChild(toolbarContainer);
                }
            }

            // Create the repository button
            const repoButton = document.createElement('a');
            repoButton.href = vm.config.repo || '';
            repoButton.target = '_blank';
            repoButton.className = 'toolbar-button repo-toolbar-button';
            repoButton.innerHTML = getRepoIcon(vm.config.repo || '');

            // Add the repository button to the toolbar
            toolbarContainer.appendChild(repoButton);

            // Ensure the repo button always displays as flex
            repoButton.style.display = 'flex';
        });
    }

    // Register the plugin with Docsify
    window.$docsify.plugins = [].concat(initRepoButton, window.$docsify.plugins);
})();
