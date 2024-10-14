{
  description = "A Nix-flake-based Bun development environment";

  inputs.nixpkgs.url = "github:nixos/nixpkgs/master";

  outputs = { self, systems, nixpkgs }:
    let
      eachSystem = f: nixpkgs.lib.genAttrs (import systems) (system: f nixpkgs.legacyPackages.${system});
    in
    {
      devShells = eachSystem (pkgs: {
        default = pkgs.mkShell {
          packages = with pkgs; [ bun ];
        };
      });
    };
}
