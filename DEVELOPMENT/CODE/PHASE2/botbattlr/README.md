# Bot Battlr- Melaine Mbae Kanana
Bot Battlr is a React web application that allows users to create their own army of bots and battle them against each other. Users can view a collection of available bots, enlist them in their army, and view their enlisted bots in a separate section.

## Technologies
Bot Battlr is built using the following technologies:
React
CSS
Bootstrap

## Getting Started
To get started with Bot Battlr, follow these steps:

Clone the repository to your local machine:
bash
git clone https://github.com/your-username/bot-battlr.git

Install dependencies:

npm install Start the development server:
sql
npm start Navigate to http://localhost:3000 in your web browser.


## Usage

Bot Battlr consists of two main components:
BotCollection: displays a collection of available bots.
YourBotArmy: displays a list of enlisted bots. Users can enlist a bot in their army by clicking on it in the BotCollection component. They can remove enlisted bots from their army by clicking on them in the YourBotArmy component.
When a user clicks on a bot in the BotCollection component, they will be taken to the BotDetails component where they can view additional details about the bot, and enlist or remove the bot from their army.
API
Bot Battlr uses the following API endpoint to retrieve bot data:

bash
http://localhost:8001/bots The API returns data in the following format:
json
{
  "bots": [
    {
      "id": 101,
      "name": "wHz-93",
      "health": 94,
      "damage": 20,
      "armor": 63,
      "bot_class": "Support",
      "catchphrase": "1010010101001101100011000111101",
      "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
      "created_at": "2018-10-02T19:55:10.800Z",
      "updated_at": "2018-10-02T19:55:10.800Z"
    },
    ...
  ]
}


## Contributing
Contributions to Bot Battlr are welcome! Here are some ways you can contribute:
Submit bug reports or feature requests by opening an issue on GitHub. Submit pull requests for bug fixes or new features. Help improve documentation by submitting pull requests for the README or other documentation files.

## Future Improvements
Implement a battle system between armies Add authentication and user accounts Add the ability to trade bots with other players Implement a leaderboard to display top players

## License
Bot Battlr is licensed under the MIT license. See the LICENSE file for more information.
(47 kB)
