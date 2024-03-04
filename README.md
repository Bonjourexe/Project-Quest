# Project Quest

## A project management application with RPG-style gamification features

### About Project Quest
Project Quest is a tool currently under development aimed at providing a unique project management experience. It combines the simplicity of a task manager with the excitement of Role-Playing Games (RPGs).

### The Motivation Behind Project Quest
The idea for Project Quest originated from a basic task manager I created for my personal use at work. This simple tool allowed for task creation, deletion, and marking tasks as "done". However, despite its utility, it lacked the robustness I needed in a project management tool.

### The RPG Connection
The process of adding tasks and tracking their progress reminded me of the quests in RPGs. This connection sparked the idea of integrating RPG elements into the project management process, making it more engaging and less mundane.

### What features are planned?
Project Quest's development is planned in three phases:

1. Basic Features
    * **Projects (Campaigns)**: Each project will have a title, a description, and a list of tasks associated with it.
    * **Tasks (Quests)**: Tasks will have a title indicating their objectives and will be divided into multiple steps.
    * **Steps**: Each step will have a description of the current task requirements and a progress state. Steps can be added in advance or as needed.
    * **Data Storage**: All data will be saved using the LocalStorage browser API.
    * **Basic Avatar Creation**: Users can create a simple avatar to represent them within the application. This feature will be expanded in phase 3.

2. Advanced Features
    * **Task Importance and Estimated Difficulty**: Ability to assign importance and estimated difficulty levels to tasks, and mark them as optional.
    * **Milestones**: Ability to define milestones and associate tasks with them.
    * **XP System**: Earn XP points by completing quests, with the amount of XP proportional to the task's difficulty and importance.
    * **Data Export to XLSX**: Export project data to XLSX files for further analysis or sharing outside the application.

3. Collaborative Features (requiring a dedicated backend)
    * **Enhanced Avatar Creation**: Users will have more customization options for their avatars, allowing them to better represent themselves within organizations and projects.
    * **Organizations (Guilds)**: Users can create and manage organizations, representing a company or a team, for example.
    * **Invitations**: Organizations can invite members to join.
    * **Avatar Selection**: Invited members can choose one of their avatars to use within the organization.
    * **Organizations Projects**: Organizations can define projects and assign members to them.
    * **Data Storage**: Guild projects and members' chosen avatars are stored on the backend.

### Introducing "Serious Mode"
For those who prefer a more traditional project management experience, Project Quest will include a "Serious Mode". This mode will:

* Disable all RPG vocabulary
* Disable all gamification features
* Switch to a more conventional application theme
* Be useful for presenting your work in a professional setting

This is just the beginning of Project Quest. Stay tuned for more updates as the project develops!