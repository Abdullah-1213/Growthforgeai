pipeline {
    agent any

    stages {
        // Note: No 'Checkout' stage is required.
        // When using "Pipeline from SCM", Jenkins automatically downloads (checks out) 
        // the code from your GitHub repo before running the first stage.

        stage('Build') {
            steps {
                sh 'echo "Building the application..."'
                // The 'ls -la' command will list the files Jenkins just downloaded from your repo
                sh 'ls -la' 
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
                // In a real project, you would run something like:
                // sh 'npm test' or 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying application..."'
                
                // Simulating deployment:
                // 1. Create a dummy server folder
                sh 'mkdir -p /tmp/my_production_server'
                
                // 2. Copy all files (*) from the workspace to that folder
                sh 'cp -r * /tmp/my_production_server'
            }
        }
    }
    
    post {
        success {
            sh 'echo "Pipeline succeeded! App is deployed."'
        }
        failure {
            sh 'echo "Pipeline failed. Please check logs."'
        }
    }
}