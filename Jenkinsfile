pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t kot_display_order .'
            }
        }

        stage('Deploy Docker Container') {
            steps {
                sh 'docker rm -f kot_display_order || true'
                sh 'docker run -d -p 9020:9020 --name kot_display_order kot_display_order'
            }
        }
    }
}
