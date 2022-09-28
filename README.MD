# DISCORD BOT TEMPLATE
**1. Clone repository**

Clone this repository to your machine
```
git clone https://github.com/JC2823/discordjs-typescript-template.git discord-bot
```

**2. Install dependencies**

Use ```npm install``` to install all the dependencies to start the project.

**3. Add Discord Token to .env**

Create an .env file and add your discord token as `DISCORD_TOKEN`, check the `.env.example` file for an example

**3. Start development server**

Then, run ```npm run dev``` to start the development server.

## Structure of the project
```
├── 📁 src
│   ├── 📁 commands 
│   │   └── 📁 info
│   │       └── 📄 text.ts
│   ├── 📁 entities
│   │   └── 📄 User.ts
│   ├── 📁 events
│   │   ├── 📄 interaction.ts
│   │   └── 📄 ready.ts
│   ├── 📁 structures
│   │   └── 📄 Client.ts
│   ├── 📄 index.ts
│   └── 📄 database.ts
├── 📄 main.db
├── 📄 .env
├── 📄 .eslintignore
├── 📄 .eslintrc.js
├── 📄 .gitignore
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 README.MD
└── 📄 tsconfig.json
```



## Build the project
To build the project, just use the ```npm run build``` command, this will compile the source code into javascript code, wich is going to be saved in the dist folder. 

## Database
The template use `sqlite` and `typeorm` as database, all the schemas of the database, are in the Entities folder. In the entities folder is an example of an entitie named `User`.

For more info check de [Typeorm Documentation](https://typeorm.io/)

## Formatting and Linting
Prettier and Eslint are installed and configured by default, to format use the command ```npm run fmt``` and for linting use the ```npm run lint``` command.

----
Remember that this can have some errors depending of your machine, node version, etc...