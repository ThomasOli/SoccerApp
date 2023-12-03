#include "Players.h"
#include "Clubs.h"

int main() {
    // Read CSV file and create Player objects
    unordered_map<string, Player> players= readplayersCSV("football_data/players.csv");
    //Read CSV file and create Club objects
    unordered_map<string, Club> clubs = readClubsCSV("football_data/clubs.csv");

    //Search for any player
    string a; cin >> a; players[a].printPlayerInfo();
    //Search for any Club
    string c; cin >> c; clubs[c].printClubInfo();
    //For now, print information of each player
    /* for (const auto& player : players) {
        player.second.printPlayerInfo();
    } */

    return 0;
}