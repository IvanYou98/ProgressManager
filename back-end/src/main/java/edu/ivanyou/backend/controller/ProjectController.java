package edu.ivanyou.backend.controller;

import edu.ivanyou.backend.exception.ProjectIdException;
import edu.ivanyou.backend.model.Project;
import edu.ivanyou.backend.services.ProjectService;
import edu.ivanyou.backend.services.ValidationErrorMapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;

@Controller
@RequestMapping("api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ValidationErrorMapService validationErrorMapService;


    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project,
                                              BindingResult result) {
        ResponseEntity<?> errorMap = validationErrorMapService.mapValidationError(result);
        if (errorMap != null) {
            return errorMap;
        }
        try {
            Project newProject = projectService.saveOrUpdateProject(project);
            return new ResponseEntity<>(newProject, HttpStatus.CREATED);
        } catch (Exception e) {
            throw new ProjectIdException(project.getProjectIdentifier() + " already exist!");
        }
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllProjects() {
        return new ResponseEntity<>(projectService.findAllProjects(), HttpStatus.OK);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId) {
        return new ResponseEntity<>(projectService.findProjectByIdentifier(projectId), HttpStatus.OK);
    }
}
