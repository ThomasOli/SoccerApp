#pragma once

#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <unordered_map>

using namespace std;
#include "Players.h"

class Club {
public:
    string club_id;
    string club_code;
    string name;
    string domestic_competition_id;
    string total_market_value;
    string squad_size;
    string average_age;
    string foreigners_number;
    string foreigners_percentage;
    string national_team_players;
    

    // Default constructor
    Club() {}

    // Constructor to initialize Club object
    Club(const string& id, const string& code, const string& clubName, const string& competitionId,
         const string& marketValue, const string& size, const string& age, const string& foreigners,
         const string& foreignersPct, const string& nationalPlayers)
        : club_id(id), club_code(code), name(clubName), domestic_competition_id(competitionId),
          total_market_value(marketValue), squad_size(size), average_age(age),
          foreigners_number(foreigners), foreigners_percentage(foreignersPct),
          national_team_players(nationalPlayers) {}

    // Function to print information about the club
    void printClubInfo() const {
        cout << "Club ID: " << club_id << endl;
        cout << "Club Code: " << club_code << endl;
        cout << "Name: " << name << endl;
        cout << "Domestic Competition ID: " << domestic_competition_id << endl;
        cout << "Total Market Value: " << total_market_value << endl;
        cout << "Squad Size: " << squad_size << endl;
        cout << "Average Age: " << average_age << endl;
        cout << "Foreigners Number: " << foreigners_number << endl;
        cout << "Foreigners Percentage: " << foreigners_percentage << endl;
        cout << "National Team Players: " << national_team_players << endl;
        cout << "---------------------" << endl;
    }
};

// Function to read CSV file and create Club objects
unordered_map<string, Club> readClubsCSV(const string& filename) {
    unordered_map<string, Club> clubs;

    ifstream file(filename);
    if (!file.is_open()) {
        cerr << "Error opening file: " << filename << endl;
        return clubs;
    }

    string line;
    getline(file, line);  // Skip header line

    while (getline(file, line)) {
        istringstream ss(line);
        string token;

        // Read each column in a line
        vector<string> clubData;
        while (getline(ss, token, ',')) {
            clubData.push_back(token);
        }

        // Create Club object and add to unordered_map
        Club club(clubData[0], clubData[1], clubData[2], clubData[3], clubData[4],
                  clubData[5], clubData[6], clubData[7], clubData[8], clubData[9]);
        clubs[club.club_id] = club;
    }

    file.close();
    cout << "Done reading " + filename << endl;
    return clubs;
}
