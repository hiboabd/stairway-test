# Leaderboard Tech Test
This project is a tech test submitted for the junior front end engineer position at Stairway Learning.


## Task description

This project is intended to simulate a reduced version of what you might expect to be implementing within the Front-End Engineering role. In this project, you'll be creating a simplified Leaderboard using React. Below you'll find a link to the Design, along with the Acceptance Criteria and API schema

### Acceptance Criteria

1. As a user, you can see the header of the Leaderboard, which displays a header and a flag to indicate the time remaining before the leaderboard resets (for this purpose, this can be a string rather than a timer)
2. As a user, you're able to see the usernames of everyone in the leaderboard, along with their position and the amount of XP they've earnt this week. The users are sorted from top to bottom, by XP earnt this week
3. As a user, my own profile is highlighted with a slightly grey background, as in the design

### API Schema

The API endpoint can be accessed at https://www.stairwaylearning.com/api/v1/stub/leaderboard

The API schema is in the following format

```json
{
	'profiles': [
		{
			'username': string,
			'weeklyXP': number,
			'isCurrentUser': boolean,
		}
	]
}
```

**API Schema as Typescript interfaces**

```json
interface LeaderboardResponse {
    profiles: Profile[];
}

interface Profile {
    username: string;
    weeklyXP: number;
		isCurrentUser: boolean;
}
```

All fields are required and can be assumed to be present

### Designs

To view the CSS for the components, clicked the title of the file below

[https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9qSLmzKSmHaTbs3PAOubUF%2FDev-Test-Leaderboard%3Fnode-id%3D0%253A1](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9qSLmzKSmHaTbs3PAOubUF%2FDev-Test-Leaderboard%3Fnode-id%3D0%253A1)

### Instructions

We'd like you to implement this example using React. Please start the project by creating a 'Create React App' project, and implement the above leaderboard using the API in the most efficient way you can determine.

Upon submission, please send us the code via email (charles@stairwaylearning.com) - bonus points will be given if you're able to ask any questions relating to edge cases, which you might focus on further in a production environment.
