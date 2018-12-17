$(document).ready(function() {
    $('#menu').click(function() {
        $('#menuhide').toggle('slow');
    });
});

$(document).ready(function() {
    var $pets = $('#pets');
    var $name = $('#name');
    var $species = $('#species');
    $('#btn').click(function() {
        $.ajax({
            type: 'GET',
            url: 'https://learnwebcode.github.io/json-example/animals-1.json',
            success: function(data) { // pets instead data
                console.log(data);
                $.each(data, function(i, pet) {
                    $pets.append('<li>' + 'the pet name is ' + pet.name + ' and it is a ' + pet.species + '</li>');
                });
            },
            error: function() {
                console.log('error');
            }
        });
        // post
        $('#add-pet').click(function() {
            var newPets = {
                name: $name.val(),
                species: $species.val()
            }
            $.ajax({
                type: 'POST',
                url: 'https://learnwebcode.github.io/json-example/animals-1.json',
                data: newPets,
                success: function(newPet) {
                    $pets.append('<li>' + 'the pet name is ' + newPet.name + ' and it is a ' + new.species + '</li>');
                },
                error: function() {
                    console.log(error);
                }
            });
        });
    });
});