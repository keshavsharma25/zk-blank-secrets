use dep::std;

fn main(solution_hash: pub Field, solution: [Field; 7], guess: pub [Field; 7]) -> pub bool {
    let guess_result_: [Field;7] = check_guess(solution, guess);

    for i in 0..7 {
        assert(guess_result_[i] == 0);
    }
    let computed_hash = std::hash::pedersen_hash(guess);

    solution_hash == computed_hash
}

fn check_guess(mut solution: [Field; 7], mut guess: [Field; 7]) -> [Field; 7] {
    let mut guess_result: [Field; 7] = [0; 7];
    for i in 0..7 {
        if guess[i] != solution[i] {
            guess_result[i] = 1;
        }

        guess_result[i] = 0;
    }

    guess_result
}
