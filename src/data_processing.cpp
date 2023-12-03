#include "Players.h"
#include "Clubs.h"
#include "Games.h"

int main() {
    // Read CSV file and create Player objects
    unordered_map<string, Player> players= readplayersCSV("football_data/players.csv");
    //Read CSV file and create Club objects
    unordered_map<string, Club> clubs = readClubsCSV("football_data/clubs.csv");
    //Read CSV file and create Game objects
    unordered_map<string, Game> games = readGamesCSV("football_data/games.csv");

    //Search for any player
    string a; cin >> a; players[a].printPlayerInfo();
    //Search for any Club
    string c; cin >> c; clubs[c].printClubInfo();
    //Search for any Game
    string g; cin >> g; games[g].printGameInfo();
    //For now, print information of each player
    /* for (const auto& player : players) {
        player.second.printPlayerInfo();
    } */

    return 0;
}