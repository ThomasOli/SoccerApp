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
