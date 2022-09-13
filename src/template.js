function createManager(manager){
    return `
                <section class="d-flex my-2 justify-content-around">
                    <div class="col-12 col-sm-6 col-lg-4">
                        <div class="card shadow">
                        <div class="card-body bg-primary text-white rounded-top">
                            <h5 class="card-title">${manager.getName()}</h5>
                            <p class="card-text"><i class="fa-solid fa-mug-hot"></i> Manager</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email:<a class="text-decoration-none" href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office Number: 1</li>
                        </ul>                             
                        </div>
                    </div>              
                </section>
    `
}

function createEngineer(engineer){
    return `
                <div class="col-12 col-sm-6 col-lg-4 mb-2">
                    <div class="card shadow">
                        <div class="card-body bg-success text-white rounded-top">
                        <h5 class="card-title">${engineer.getName()}</h5>
                        <p class="card-text"><i class="fa-solid fa-glasses"></i> Engineer</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email:<a class="text-decoration-none" href="mailto:${engineer.getEmail()}"> ${engineer.getEmail()}</a></li>
                            <li class="list-group-item">Github: <a class="text-decoration-none" href="https://www.github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                        </ul>               
                    </div>
                </div> 
    `
}

function createIntern(intern){
    return `            
                <div class="col-12 col-sm-6 col-lg-4 mb-2">
                    <div class="card shadow">
                        <div class="card-body bg-secondary text-white rounded-top">
                        <h5 class="card-title">${intern.getName()}</h5>
                        <p class="card-text"><i class="fa-solid fa-graduation-cap"></i> Intern</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${intern.getId()}</li>
                            <li class="list-group-item">Email:<a class="text-decoration-none" href="mailto:${intern.getEmail()}"> ${intern.getEmail()}</a></li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>               
                    </div>
                </div>   
    `
}

const template = (team) => {
    console.log(team);
    const managerArray = [];
    const manager = team.filter(teamMember => teamMember.getRole() === 'Manager').map(manager => createManager(manager));
    managerArray.push(manager);


    const engineerArray = [];
    const engineer = team.filter(teamMember => teamMember.getRole() === 'Engineer').map(engineer => createEngineer(engineer));
    engineerArray.push(engineer);

    const internArray = [];
    const intern = team.filter(teamMember => teamMember.getRole() === 'Intern').map(intern => createIntern(intern));
    internArray.push(intern);

    return`
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <title>Team Members</title>
    </head>
    <body>
        <nav class="navbar bg-dark">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1 text-white mx-auto">Team Members</span>
            </div>
          </nav>
          <main class="container-fluid">
            <!-- manager section -->
            ${manager.join('')}

            <!-- Engineer section -->
            <section class="d-flex my-2 justify-content-around flex-wrap">
                ${engineer.join('')}
            </section>

            <!-- intern section -->
            <section class="d-flex my-2 justify-content-around flex-wrap">
                ${intern.join('')}                                          
            </section>
          </main>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous"></script>
    </body>
    </html>
    
    `
}

module.exports = template;