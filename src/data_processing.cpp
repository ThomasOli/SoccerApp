#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>

using namespace std;

class Player {
public:
    int player_id;
    string first_name;
    string last_name;
    string name;
    int last_season;
    int current_club_id;
    string player_code;
    string country_of_birth;
    string city_of_birth;
    string country_of_citizenship;
    string date_of_birth;
    string sub_position;
    string position;
    string foot;
    string height_in_cm;
    string market_value_in_eur;
    string highest_market_value_in_eur;
    string contract_expiration_date;
    string agent_name;
    string image_url;
    string url;
    string current_club_domestic_competition_id;
    string current_club_name;

    // Constructor to initialize Player object
    Player(int id, const string& first, const string& last, const string& playerName,
           int season, int clubId, const string& code, const string& birthCountry,
           const string& birthCity, const string& citizenshipCountry, const string& dob,
           const string& subPos, const string& pos, const string& playerFoot, const string& height,
           const string& marketValue, const string& highestMarketValue, const string& contractExpDate,
           const string& agent, const string& imageUrl, const string& playerUrl,
           string clubCompId, const string& clubName)
        : player_id(id), first_name(first), last_name(last), name(playerName), last_season(season),
          current_club_id(clubId), player_code(code), country_of_birth(birthCountry),
          city_of_birth(birthCity), country_of_citizenship(citizenshipCountry),
          date_of_birth(dob), sub_position(subPos), position(pos), foot(playerFoot),
          height_in_cm(height), market_value_in_eur(marketValue),
          highest_market_value_in_eur(highestMarketValue),
          contract_expiration_date(contractExpDate), agent_name(agent), image_url(imageUrl),
          url(playerUrl), current_club_domestic_competition_id(clubCompId),
          current_club_name(clubName) {}
    // Function to print information about the player
    // Function to print information about the player
    void printPlayerInfo() const {
        cout << "Player ID: " << player_id << endl;
        cout << "First Name: " << first_name << endl;
        cout << "Last Name: " << last_name << endl;
        cout << "Full Name: " << name << endl;
        cout << "Last Season: " << last_season << endl;
        cout << "Current Club ID: " << current_club_id << endl;
        cout << "Player Code: " << player_code << endl;
        cout << "Country of Birth: " << country_of_birth << endl;
        cout << "City of Birth: " << city_of_birth << endl;
        cout << "Country of Citizenship: " << country_of_citizenship << endl;
        cout << "Date of Birth: " << date_of_birth << endl;
        cout << "Sub Position: " << sub_position << endl;
        cout << "Position: " << position << endl;
        cout << "Foot: " << foot << endl;
        cout << "Height in cm: " << height_in_cm << endl;
        cout << "Market Value in EUR: " << market_value_in_eur << endl;
        cout << "Highest Market Value in EUR: " << highest_market_value_in_eur << endl;
        cout << "Contract Expiration Date: " << contract_expiration_date << endl;
        cout << "Agent Name: " << agent_name << endl;
        cout << "Image URL: " << image_url << endl;
        cout << "Player URL: " << url << endl;
        cout << "Current Club Domestic Competition ID: " << current_club_domestic_competition_id << endl;
        cout << "Current Club Name: " << current_club_name << endl;
        cout << "---------------------" << endl;
    }

};

// Function to read CSV file and create Player objects
vector<Player> readCSV(const string& filename) {
    vector<Player> players;

    ifstream file(filename);
    if (!file.is_open()) {
        cerr << "Error opening file: " << filename << endl;
        return players;
    }

    string line;
    getline(file, line);  // Skip header line

    while (getline(file, line)) {
        istringstream ss(line);
        string token;

        // Read each column in a line
        vector<string> playerData;
        while (getline(ss, token, ',')) {
            playerData.push_back(token);
        }

        // Create Player object and add to vector
        Player player(stoi(playerData[0]), playerData[1], playerData[2], playerData[3], stoi(playerData[4]),
                      stoi(playerData[5]), playerData[6], playerData[7], playerData[8], playerData[9],
                      playerData[10], playerData[11], playerData[12], playerData[13],
                      playerData[14], playerData[15], playerData[16],
                      playerData[17], playerData[18], playerData[19], playerData[20],
                      playerData[21], playerData[22]);
        players.push_back(player);
    }

    file.close();
    return players;
}

int main() {
    string filename = "football_data/players.csv";

    // Read CSV file and create Player objects
    vector<Player> players = readCSV(filename);

    //For now, print information of each player
    for (const auto& player : players) {
        player.printPlayerInfo();
    }

    return 0;
}
