import gcp from '../app/assets/svg/skills/gcp.svg';
import aws from '../app/assets/svg/skills/aws.svg';
import kubernetes from '../app/assets/svg/skills/kubernetes.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import nginx from '../app/assets/svg/skills/nginx.svg';
import git from '../app/assets/svg/skills/git.svg';
import mongodb from '../app/assets/svg/skills/mongoDB.svg';
import terraform from '../app/assets/svg/skills/terraform.svg';
import jenkins from '../app/assets/svg/skills/jenkins.svg';
import linux from '../app/assets/svg/skills/linux.svg';
import bitbucket from '../app/assets/svg/skills/bitbucket.svg';
import ansible from '../app/assets/svg/skills/ansible.svg';
import github from '../app/assets/svg/skills/github.svg';
import prometheus from '../app/assets/svg/skills/prometheus.svg';
import grafana from '../app/assets/svg/skills/grafana.svg';
import snyk from '../app/assets/svg/skills/snyk.svg';
import semgrep from '../app/assets/svg/skills/semgrep.svg';
import checkov from '../app/assets/svg/skills/checkov.svg';
import trivy from '../app/assets/svg/skills/trivy.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  const skillMap = {
    'gcp': gcp,
    'aws': aws,
    'kubernetes': kubernetes,
    'docker': docker,
    'nginx': nginx,
    'git': git,
    'mongodb': mongodb,
    'terraform': terraform,
    'jenkins': jenkins,
    'linux': linux,
    'bitbucket': bitbucket,
    'ansible': ansible,
    'github': github,
    'prometheus': prometheus,
    'grafana': grafana,
    'snyk': snyk,
    'semgrep': semgrep,
    'checkov': checkov,
    'trivy': trivy
  };
  
  return skillMap[skillID] || null;
}

