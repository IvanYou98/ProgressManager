package edu.ivanyou.backend.controller;

import edu.ivanyou.backend.model.Project;
import edu.ivanyou.backend.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;


    @PostMapping("")
    public ResponseEntity<Project> createNewProject(@RequestBody Project project) {
        Project newProject = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<>(newProject, HttpStatus.CREATED);
    }
}
