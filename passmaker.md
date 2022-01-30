<img src="header.png" width="600" href="index.html"/>

[Resume][1] | [LinkedIn][2] | [GitLab][3] | [JSON FEED][4]

---

<img src="passmaker.png" alt="Passmaker Logo" width="600">

## Catalyst
In May of 2018, Twitter disclosed its [largest data breach][5]. Twitter exposed user data  in plaintext, an indiscretion that prompted me to conduct my own password security audit. At the time, I stored my passwords in my mind, a place more secure than a plaintext document but conducive to passwords that were short and often reused. Twitter's data breach led me down a rabbit hole into the world of password managers and encouraged me to develop a bespoke solution for generating long, future proof passwords.

## Bitwarden
Bitwarden distinguished itself from other password managers with cross platform availability and an emphasis on security beyond that of its competitors. Bitwarden reinforced their dedication to security by offering [AES 256 bit encryption][6] and conducting [third party security audits][7]. Bitwarden's functionality extends to users of all platforms and skill levels and in turn solidifies itself as a viable solution for most users. Bitwarden is available on MacOS, Windows, Linux, iOS, Android, the terminal, and via browser extension for Safari, Firefox, Edge, and all chrome based browsers. Everyone from the Linux system administrator running a locally hosted implementation of the Bitwarden cli to the Chromebook user may use Bitwarden to store passwords with confidence. This confidence served as my motivation to do the same.


## Passmaker
Bitwarden's password storage left nothing to be desired, but a flaw in its password generator presented me with an opportunity. Bitwarden limits generated passwords to 20 characters, which may be sufficient for the current computer landscape but will render the service ineffective in the near future. As computers advance in processing power, they lower the execution time of a simple a brute force attack. Shorter passwords become particularly susceptible to theft with the only deterrence being longer passwords in the present. It was with this knowledge that I designed my own password generator Passmaker. Passmaker gave me the opportunity to design a password generator with an uncapped character limit and learn more about the syntax and standard libraries of [Rust][8], [Go][9], [Java][10], [Python][11] and [Swift][12]. I published the resulting programs to my [GitLab][13] so that future developers would be able to extend my solutions and improve their own password security.

[1]: resume.pdf
[2]: https://www.linkedin.com/in/trevoropiyo
[3]: https://gitlab.com/trevoropiyo
[4]: feed.json
[5]: https://www.theverge.com/2018/5/3/17316684/twitter-password-bug-security-flaw-exposed-change-now
[6]: https://bitwarden.com/products
[7]: https://bitwarden.com/products
[8]: https://gitlab.com/trevoropiyo/rust-passmaker
[9]: https://gitlab.com/trevoropiyo/go-passmaker
[10]: https://gitlab.com/trevoropiyo/java-passmaker
[11]: https://gitlab.com/trevoropiyo/python-passmaker
[12]: https://gitlab.com/trevoropiyo/swift-passmaker
[13]: https://gitlab.com/trevoropiyo