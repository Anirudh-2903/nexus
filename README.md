<div align="center">
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/homepage.png" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS_14-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Nexus - A Full Stack Next 14 Video Conferencing App</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)




## <a name="introduction">🤖 Introduction</a>

<div align="center">
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/homepage.png" alt="homepage">
  <br />
</div>

Nexus redefines video conferencing with a powerful blend of user-friendly features and cutting-edge technology. Securely log in with Clerk, quickly launch meetings, and enjoy intuitive controls over video, audio, and screen sharing. Create your own personalized meeting space with a unique link, accessible anytime. Manage participants, record meetings, and access past sessions with ease. 

Built on a robust tech stack of Node.js, Next.js, and TypeScript, Nexus ensures smooth performance and future scalability. getstream and shadcn power real-time communication for seamless collaboration without lag, while Tailwind CSS delivers a beautiful and responsive interface that adapts perfectly to any device. 

Nexus is more than just video conferencing, it's the future of collaboration built on a foundation of cutting-edge technology.



## <a name="tech-stack">⚙️ Tech Stack</a>

- Node.js
- Next.js
- TypeScript
- Clerk
- getstream
- shadcn
- Tailwind CSS


## <a name="features">🔋 Features</a>

👉 **Authentication**: Implements authentication and authorization features using Clerk, allowing users to securely log in via social sign-on or traditional email and password methods, while ensuring appropriate access levels and permissions within the platform.

<div align="center">
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/signup.png" alt="signup">
  <br />
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/signin.png" alt="signin">
  <br />
</div>


👉 **New Meeting**: Quickly start a new meeting, configuring camera and microphone settings before joining.

<div align="center">
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/start_meeting.png" alt="start_meeting">
  <br />
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/adjust_settings.png" alt="adjust_settings">
  <br />
</div>

👉 **Meeting Controls**: Participants have full control over meeting aspects, including recording, emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant list view, and individual participant management (pinning, muting, unmuting, blocking, allowing video share).

<div align="center">
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/meeting.png" alt="meeting">
  <br />
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/screen-share.jpg" alt="screen-share">
  <br />
</div>

👉 **Exit Meeting**: Participants can leave a meeting, or creators can end it for all attendees.

👉 **Schedule Future Meetings**: Input meeting details (date, time) to schedule future meetings, accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.

<div align="center">
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/schedule_meeting.png" alt="schedule_meeting">
  <br />
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/meeting_scheduled.png" alt="meeting_scheduled">
  <br />
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/upcoming.png" alt="upcoming">
  <br />
</div>

👉 **Past Meetings List**: Access a list of previously held meetings, including details and metadata.

<div align="center">
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/previous.png" alt="previous">
  <br />
</div>

👉 **View Recorded Meetings**: Access recordings of past meetings for review or reference.

<div align="center">
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/recordings.png" alt="recordings">
  <br />
</div>

👉 **Personal Room**: Users have a personal room with a unique meeting link for instant meetings, shareable with others.

<div align="center">
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/personal_meeting.png" alt="personal_meeting">
  <br />
</div>

👉 **Join Meetings via Link**: Easily join meetings created by others by providing a link.

<div align="center">
  <br />
      <img src="https://github.com/Anirudh-2903/Project-Images/blob/master/Nexus/join_meeting.png" alt="join_meeting">
  <br />
</div>

👉 **Secure Real-time Functionality**: All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.

👉 **Responsive Design**: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.

and many more, including code architecture and reusability. 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Anirudh-2903/nexus.git
cd nexus
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up


NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=


NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```

Replace the placeholder values with your actual credentials

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

---

