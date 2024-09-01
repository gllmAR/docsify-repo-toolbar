
# Docsify repo toolbar

This simple Docsify plugin adds a customizable repository toolbar button to your Docsify site. The button appears in the sidebar, replacing the default GitHub corner link, and is styled based on the repository's platform (GitHub, GitLab, or others).


## Features

- Automatically detects the repository platform and displays an appropriate icon.
- Adds a toolbar button to the sidebar, linking to your repository.
- Supports GitHub, GitLab, and other repository platforms.
- Automatically hides the button when the sidebar is closed.

## Installation

1. Add the plugin script to your Docsify site. Include the following code in your Docsify HTML file:

   ```html
   <script src="https://gllmar.github.io/docsify-repo-toolbar/docsify-repo-toolbar.js"></script>
   ```

2. Configure your Docsify site by specifying the `repo` URL in the Docsify configuration:

   ```javascript
   window.$docsify = {
       repo: 'https://YOUR_DOCSIFY_GIT_URL',
       // other Docsify configurations
   };
   ```

3. The plugin will automatically detect the repository URL and display the corresponding icon in the sidebar.

## Usage

The repository button will appear in the sidebar instead of in the top corner as it is per default, and it will link to the URL specified in your Docsify configuration.

## Customization

You can customize the styles of the toolbar button by modifying the `defaultStyles` variable in the plugin code.

## Example

Here’s a quick example of how the plugin might be integrated into your Docsify project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Docsify with Repo Toolbar Button</title>
</head>
<body>
    <div id="app"></div>
    <script>
        window.$docsify = {
            repo: 'https://YOUR_DOCSIFY_GIT_URL',
            // other Docsify configurations
        };
    </script>
    <script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
    <script src="https://gllmar.github.io/docsify-repo-toolbar/"></script>
</body>
</html>
```

## Notes

- Ensure that the repository URL provided in the Docsify configuration (`window.$docsify.repo`) is correct.
- The button visibility is controlled based on the sidebar's state (open/closed).

This plugin enhances the user experience by providing quick access to the repository directly from the Docsify sidebar.
