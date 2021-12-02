<img src="header.png" width="600"href="index.html"/>

[Resume][1] | [LinkedIn][2] | [GitHub][3]

---

<img src="/passmaker.png" alt="Passmaker Logo" width="600">


# Passmaker
For many years prior to learning good computer security practices I would reuse passwords. After reading numerous headlines about large data breaches I began to research better ways to store passwords and two password managers stood out to me for having the best security practices. In my experience [Bitwarden][1] and [Safari Keychain][2] were the simplest and most secure ways to store non-reused passwords between devices. Between the two I use Bitwarden, who's [software compatibility][3], and [AES-256 bit encryption][4] stood out to me amongst its competitors. 

After choosing and configuring a password manager, I found that the password generator included in the password manager did not make acceptable passwords for of the many websites and services that required a new password. Bitwarden's password generator offered too little granularity in password creation. The only options were toggles for special characters(%-#& , etc.) and integers. Other password managers on the internet provided too much granularity in password creation, with configurability that would allow for the creation of passwords that could be cracked in polynomial time. Inclusion of questions such as "How many numbers would you like to include in the password?" disappointed me, by limiting the number of permutations of the password that may be generated.

Eventually, I decided to write my own password generator that met my personal criteria in terms of security and variability and to serve as an exercise in learning about programming language standard libraries and syntax. The programming languages that I chose to implement the project are [Java][5], [Python][6], [Go][7], [Rust][8], and [Swift][9]. I knew initially that all implementations of Passmaker should attempt to account for two prominent security criteria; The random library used to generate the passwords must be cryptographically random, and the passwords must contain the highest amount of variability during password generation. Examples of cryptographically secure libraries include [rand chacha][10], in rust and [rand][11] in go and are instrumental in ensuring that passwords are difficult, if not impossible to reverse engineer. To meet the second criteria, all implementations of the password generator ask users for characters to include in the password without specifying a number of a given character type or guaranteeing that a character type will be included in the final product. Instead, users are encouraged to regenerate a password with the same parameters until a password is generated that they find acceptable. This also add the benefit of encouraging users to generate more passwords as opposed to utilizing their first choice, and obfuscates attempts at guessing what the password may be. The final results of the password manager may produce results that are somewhat unexpected with respect to a user's initial choices but reflect my values in password generation most effectively.

I found that in the creation of the password generator which I named "Passmaker" there were a number of aesthetic and design decisions that I made to ensure that the program would be available to a large number of users. They include but are not limited to 1) Building a CLI so that the program may be used on Linux, MacOS, and Windows. 2) Reducing the program size a single file with a minimum number of dependencies to increase performance. 3) Ensuring the functions are no more than polynomial time. 4) Attempting a functional approach to software creation to further limit the use of storage and system resources. 5) Publishing the repository to [My GitHub][12], so that other developers would be able to follow along in the software's development and audit the code themselves.

My encouragement to anybody remotely interested in the project and its development is to read the source code for the individual implementations, and clone a copy of the project to use themselves. The rust implementation has been [published][13] as a crate on [crates.io][14] and may be compiled from source via [cargo][15] if you have the rust programming language installed. This is my preferred method and the installation command is below.

<code>cargo install rust-passmaker</code>



[1]: https://bitwarden.com
[2]: https://support.apple.com/guide/mac-help/use-keychains-to-store-passwords-mchlf375f392/mac
[3]: https://bitwarden.com/download/
[4]: https://bitwarden.com/images/resources/security-white-paper-2021.pdf
[5]: https://github.com/Trevor-Opiyo/java-passmaker
[6]: https://github.com/Trevor-Opiyo/python-passmaker
[7]: https://github.com/Trevor-Opiyo/go-passmaker
[8]: https://github.com/Trevor-Opiyo/rust-passmaker
[9]: https://github.com/Trevor-Opiyo/swift-passmaker
[10]: https://crates.io/crates/rand_chacha
[11]: https://pkg.go.dev/crypto/rand
[12]: https://github.com/Trevor-Opiyo
[13]: https://crates.io/crates/rust-passmaker
[14]: https://crates.io
[15]: https://doc.rust-lang.org/cargo/index.html
