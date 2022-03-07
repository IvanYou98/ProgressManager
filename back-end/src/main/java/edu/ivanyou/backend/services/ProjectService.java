package edu.ivanyou.backend.services;

import edu.ivanyou.backend.exception.ProjectIdException;
import edu.ivanyou.backend.model.Project;
import edu.ivanyou.backend.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project) {
        return projectRepository.save(project);
    }

    public Project findProjectByIdentifier(String projectIdentifier) {
        Project project = projectRepository.findByProjectIdentifier(projectIdentifier);
        if (project == null) {
            throw new ProjectIdException("Project id: " + projectIdentifier + " does not exist!");
        }
        return project;
    }

    public List<Project> findAllProjects() {
        return projectRepository.findAll();
    }
}
