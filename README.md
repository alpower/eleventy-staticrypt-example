This is an example repo to go with a tutorial on [How to password protect a static site on Vercel, Netlify, or any JAMStack site](https://www.alpower.com/tutorials/how-to-password-protect-a-static-site/)

### Warnings and things to be aware of

- As encryption happens at build time for convenience, the password is stored in your package.json file, so this security is pointless if stored in publicly accessible repositories.
- Anyone with access to your repository could see the password.
- Keeping passwords in source control is a bad practice generally, but this is just meant to be a deterrent and a fun example.
