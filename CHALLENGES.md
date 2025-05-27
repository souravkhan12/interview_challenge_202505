Your task is to understand the codebase and complete the tasks.

Some guidelines:

0. Fork and clone the repository (Make it private)
1. Solve the Known issues below
2. Implement Feature requests
3. Commit frequently, wherever recommended, as per best practices. Git messages should be crisp and explain the intent.
4. Push the code to a private repository (Don't make it public)
5. Send us your details, along with link to this repo, and a loom link (recording your face is not required, however is good practice for code walkthroughs), explaining your understanding of the codebase. Walk us through your understanding of the bug fixes, and feature requests one by one.

## 🐞 Known Issues (To Be Fixed)

### 1. User Feedback Bug Report

We've received some user complaints that their notes aren't all showing up - for example, someone mentioned they had around 100 notes, but could only access a small handful on the interface.

It's unclear whether this is a backend or frontend issue (or both), so you'll need to dig into it and identify the root cause.

Once you’ve fixed the problem, take a pass at improving the overall usability of that page - it currently feels confusing.

### 2. UI Glitch After Note Creation

There’s a weird behavior happening with the "Create Note" button. After a user creates a note and then immediately tries to create another one, the new note form seems to blink or disappear almost instantly - like it opens and closes right away.

This isn’t consistent with how it should work. You should be able to create multiple notes one after the other without having to reload the page or jump through hoops.

Look into what might be causing this - is it a timing thing? State not resetting? Something with focus or rendering?

Fix it so that the flow feels smooth and users can create notes continuously without issues.

### 3. Wrong Timestamp on New Notes

A few users noticed something odd: when they create a note, the timestamp shown on the card says “Yesterday” - even though they just made it.

That’s definitely not expected. The note was created today, so it shouldn’t be labeled as “Yesterday.”

Can you figure out what’s going wrong here and fix it? It could be a timezone thing, or maybe some formatting issue. Once it's fixed, double-check that newly created notes reflect the correct relative time (e.g., “Just now”, “5 minutes ago”, etc.).

### 4. We’ve received a heads-up that there might be a security vulnerability (or unintended access path) in how the note detail view is implemented.

There aren't any specific repro steps, but the concern is that users might be able to view or access notes they shouldn’t be able to - for example, by manipulating the URL or API calls.

Your task:
Investigate how note access control is currently handled.
Identify whether there's indeed a security issue (e.g. unauthorized access, missing ownership checks, etc.).
Patch it so that users can only view their own notes.

If relevant, apply the same fix pattern to any related views.

## Feature Requirements (To Be Implemented)

These features are requested but not yet implemented:

### 1. Feature Request – Favorite Notes

Some users have asked for a way to quickly mark their important notes - kind of like a "favorite" or "star" feature.

- Each note should be "star-able".
- Toggling the star should update the note.
- Add visual indication (e.g. star icon) for starred notes.
- Modify the list view so that **starred notes appear first**.

Make assumptions, if any missing details, and document that in your response.

### 2. Product Thinking – Comprehensive Search (Out of Scope to Implement)

Let's say we wanted to create a search notes feature - something that feels fast, accurate, and helpful even for users with thousands of notes.

If we were to build a comprehensive search experience, how would you approach it? Don’t worry about writing code - instead, walk us through how you’d design the feature end-to-end (both from a product and technical perspective).

Bonus: any ideas for making search feel smart or delightful for users?

Write this like you're laying out a plan for your team. Diagrams or bullet points are fine - no need to be overly formal.
