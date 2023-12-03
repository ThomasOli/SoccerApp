#pragma once

#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <unordered_map>

using namespace std;
#include "Clubs.h"

class Game {
public:
    string game_id;
    string competition_id;
    string season;
    string round;
    string date;
    string home_club_id;
    string away_club_id;
    string home_club_goals;
    string away_club_goals;
    string home_club_position;
    string away_club_position;

    // Default constructor
    Game() {}

    // Constructor to initialize Game object
    Game(const string& gameId, const string& compId, const string& seas, const string& rnd,
         const string& gameDate, const string& homeClubId, const string& awayClubId,
         const string& homeGoals, const string& awayGoals, const string& homePos, const string& awayPos)
        : game_id(gameId), competition_id(compId), season(seas), round(rnd),
          date(gameDate), home_club_id(homeClubId), away_club_id(awayClubId),
          home_club_goals(homeGoals), away_club_goals(awayGoals),
          home_club_position(homePos), away_club_position(awayPos) {}

    // Function to print information about the game
    void printGameInfo() const {
        cout << "Game ID: " << game_id << endl;
        cout << "Competition ID: " << competition_id << endl;
        cout << "Season: " << season << endl;
        cout << "Round: " << round << endl;
        cout << "Date: " << date << endl;
        cout << "Home Club ID: " << home_club_id << endl;
        cout << "Away Club ID: " << away_club_id << endl;
        cout << "Home Club Goals: " << home_club_goals << endl;
        cout << "Away Club Goals: " << away_club_goals << endl;
        cout << "Home Club Position: " << home_club_position << endl;
        cout << "Away Club Position: " << away_club_position << endl;
        cout << "---------------------" << endl;
    }

    //Function to return whether a given club won the game
    bool wonGame(string club_id) {
        if (club_id == home_club_id && home_club_goals > away_club_goals) {
            return true;
        }
        else if (club_id == away_club_id && away_club_goals > home_club_goals) {
            return true;
        }
        return false;
    }
    //Function to return whether a given club lost the game
    bool lostGame(string club_id) {
        if (club_id == home_club_id && home_club_goals < away_club_goals) {
            return true;
        }
        else if (club_id == away_club_id && away_club_goals < home_club_goals) {
            return true;
        }
        return false;
    }
};

// Function to read CSV file and create Game objects
unordered_map<string, Game> readGamesCSV(const string& filename) {
    unordered_map<string, Game> games;

    ifstream file(filename);
    if (!file.is_open()) {
        cerr << "Error opening file: " << filename << endl;
        return games;
    }

    string line;
    getline(file, line);  // Skip header line

    while (getline(file, line)) {
        istringstream ss(line);
        string token;

        // Read each column in a line
        vector<string> gameData;
        while (getline(ss, token, ',')) {
            gameData.push_back(token);
        }

        // Create Game object and add to unordered_map
        Game game(gameData[0], gameData[1], gameData[2], gameData[3],
                  gameData[4], gameData[5], gameData[6], gameData[7],
                  gameData[8], gameData[9], gameData[10]);
        games[game.game_id] = game;
    }

    file.close();
    cout << "Done reading " + filename << endl;
    return games;
}

unordered_map<string, Game> onlyRecentGames(unordered_map<string, Game> &games) {
    unordered_map<string, Game> recentGames;
    for (const auto& game : games) {
        if (game.second.season == "2023") {
            recentGames.insert(game);
        }
    }
    return recentGames;
}

unordered_map<string, Player> readAppearancesCSV(const string& filename, unordered_map<string, Player>& players, unordered_map<string, Game>& games, unordered_map<string,string> &idtocodes) {
    ifstream file(filename);
    if (!file.is_open()) {
        cerr << "Error opening file: " << filename << endl;
        return players;
    }

    string line;
    getline(file, line);  // Skip header line
    int i = 0; //TODO: delete

    while (getline(file, line)) {
        istringstream ss(line);
        string token;

        // Read each column in a line
        vector<string> appearanceData;
        while (getline(ss, token, ',')) {
            appearanceData.push_back(token);
        }

        // Extract information from the appearanceData vector
        string appearance_id = appearanceData[0];
        string game_id = appearanceData[1];
        string player_id = appearanceData[2];
        string player_club_id = appearanceData[3];
        string date = appearanceData[5];
        string player_code = idtocodes[player_id];

        // Look up the game in the games map
        auto gameIter = games.find(game_id); //&& idtocodes.find(player_id) != idtocodes.end()
        if (gameIter != games.end()) {
            // Check if the player's club won the game
            if (gameIter->second.wonGame(player_club_id)) {
                // Update the players' gamesWon vector
                auto playerIter = players.find(player_code);
                if (playerIter != players.end()) {
                    playerIter->second.gamesWon.push_back(game_id);
                } else {;
                    //cerr << "Player not found: " << player_code << endl;
                }
            }
            // Check if the player's club lost the game
            else if (gameIter->second.lostGame(player_club_id)) {
                // Update the players' gamesWon vector
                auto playerIter = players.find(player_code);
                if (playerIter != players.end()) {
                    playerIter->second.gamesLost.push_back(game_id);
                } else {;
                    //cerr << "Player not found: " << player_code << endl;
                }
            }
        } else {
            cerr << "Game not found: " << game_id << endl;
        }
        if (i++ % 50000 == 0) cout << i << endl; //TODO: delete
    }

    file.close();
    cout << "Done reading " + filename << endl;
    return players;
}