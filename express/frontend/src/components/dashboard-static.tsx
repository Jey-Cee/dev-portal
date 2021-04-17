import React from "react";
import { handleLogin } from "../App";
import { CardButton } from "./Dashboard";

export const resourcesCards = [
	{
		title: "Documentation",
		img: "images/doc.jpg",
		text: "Read all the important information about ioBroker development.",
		buttons: [
			<CardButton
				text="Open"
				url="https://www.iobroker.net/#en/documentation/dev/adapterdev.md"
			/>,
		],
	},
	{
		title: "Best Practices",
		img: "images/best-practices.jpg",
		text:
			"Development and coding best practices help you to create a great adapter.",
		buttons: [
			<CardButton
				text="Open"
				url="https://github.com/ioBroker/ioBroker.repositories#development-and-coding-best-practices"
			/>,
		],
	},
	{
		title: "Review Checklist",
		img: "images/code-review.svg",
		squareImg: true,
		text:
			"When you complete this checklist, your adapter should meet all requirements to be added to the repository.",
		buttons: [
			<CardButton
				text="Open"
				url="https://github.com/ioBroker/ioBroker.repositories/blob/master/REVIEW_CHECKLIST.md#adapter-review-checklist"
			/>,
		],
	},
	{
		title: "Community Initiatives",
		img: "images/iobroker.png",
		text: "Project management board for ioBroker Community Initiatives",
		buttons: [
			<CardButton
				text="open"
				url="https://github.com/ioBroker/Community/projects/1"
			/>,
		],
	},
];

export const socialCards = [
	{
		title: "Developer Forum",
		img: "images/iobroker.png",
		text:
			"Get in touch with other developers and discuss features.\nIn other sections of the forum you can request user feedback about your adapter releases.",
		buttons: [
			<CardButton
				text="Open"
				url="https://forum.iobroker.net/category/8/entwicklung"
			/>,
		],
	},
	{
		title: "Telegram",
		img: "images/telegram.svg",
		squareImg: true,
		text:
			"In the telegram channel for ioBroker development (German) you can exchange ideas and ask questions.",
		buttons: [
			<CardButton text="Join" url="https://t.me/ioBroker_development" />,
		],
	},
	{
		title: "Discord",
		img: "images/discord.png",
		squareImg: true,
		text:
			"Get in touch with other developers and discuss features on our Discord server.",
		buttons: [
			<CardButton text="Join" url="https://discord.gg/Ne3y6fUac3" />,
		],
	},
];

export function getToolsCards(isLoggedIn: boolean) {
	return [
		{
			title: "Adapter Creator",
			img: "images/adapter-creator.png",
			text:
				"Create a new ioBroker adapter by answering questions. The resulting adapter can be downloaded as a zip file or directly exported to a new GitHub repository.",
			buttons: [<CardButton text="Open" link="/create-adapter" />],
		},
		{
			title: "Adapter Check",
			img: "images/adapter-check.png",
			text:
				"Verify your ioBroker adapter to see if it matches the requirements to be added to the repository." +
				(isLoggedIn ? "" : "\nYou must be logged in to use this tool."),
			buttons: [
				isLoggedIn ? (
					<CardButton text="Open" link="/adapter-check" />
				) : (
					<CardButton text="Login" onClick={handleLogin} />
				),
			],
		},
		{
			title: "Weblate",
			img: "images/weblate.png",
			text:
				"Manage the translations of your adapters in all available languages.",
			buttons: [
				<CardButton
					text="Open"
					url="https://weblate.iobroker.net/projects/adapters/"
				/>,
			],
		},
	];
}