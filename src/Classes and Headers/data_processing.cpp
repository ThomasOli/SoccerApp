#include "Players.h"
#include "Clubs.h"
#include "Games.h"

#include <fstream>
#include <map>

int main() {
    // Read CSV file and create Player objects
    unordered_map<string, Player> players = readplayersCSV("./../football_data/players.csv");
    //Read CSV file and create Club objects
    unordered_map<string, Club> clubs = readClubsCSV("./../football_data/clubs.csv");
    //Read CSV file and create Game objects
    unordered_map<string, Game> games = readGamesCSV("./../football_data/games.csv");
    //games = onlyRecentGames(games);
    unordered_map<string,string> codestoids = getPlayercodesToIds(players);

    players = readAppearancesCSV("./../football_data/appearances.csv", players, games);
 

//     //Build the graph, represented as an adjacency list
//     //The string is a given player's id, say player
//     //The vector contains the ids of all the players that the given player beat
    unordered_map<string, vector<string>> graph;
    int i = 0;
    for (const auto& player : players) {
        if (i % 1000 == 0) cout << i++ << endl;
        vector<string> playersBeat;
        for (const auto& game : player.second.gamesWon) {
            for (const auto &lplayer : games[game].losingPlayers) {
                playersBeat.push_back(lplayer.player_id);
            }
        }
        graph.emplace(player.first, playersBeat);
    }
    cout << "Done Building Graph" << endl;


    // Create and open a text file
    // ofstream MyFile("data.js");

    // Write to the file
    // MyFile << "export var edges = {\n";

    // for (auto playerFrom : graph) {
    //     MyFile << "    " << playerFrom.first << ": {\n";
    //     MyFile << "        to: [\n";
    //     MyFile << "            " ;
    //     for (int i = 0; i < playerFrom.second.size(); i++) {
    //         MyFile << playerFrom.second[i];
            
    //         if (i < playerFrom.second.size() - 1) {
    //             MyFile << ", ";
    //         }
    //     }
    //     MyFile << "\n        ]\n";
    //     MyFile << "    },\n";
    // }

    // MyFile << "};";


    // Close the file
    // MyFile.close();


    // // Create and open a text file
    // ofstream MyFile("playerId.js");

    // // Write to the file
    // MyFile << "export var id = {\n";

    // for (auto player : codestoids) {
    //     MyFile << "\"" << player.first << "\"" << ": " << player.second << ",\n";
    // }

    // MyFile << "};";


    // // // Close the file
    // MyFile.close();

    std::cout << "done";


    //Search for any player
    //while (true) {string a; cin >> a; players[a].printPlayerInfo();} // Now enter player id to search
    //Search for any players losers
    // while (true) {string a; cin >> a; players[codestoids[a]].printPlayerInfo(); cout << graph[codestoids[a]].size() << endl;}
    //Search for any Club
    //string c; cin >> c; clubs[c].printClubInfo();
    //Search for any Game
    //while (true) {string g; cin >> g; games[g].printGameInfo();}
    //For now, print information of each player
    /* for (const auto& player : players) {
        player.second.printPlayerInfo();
    } */

    return 0;
}