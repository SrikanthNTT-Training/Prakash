package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Movie;
import com.example.demo.service.MovieService;


@RestController
public class MovieController {

    @Autowired
    private MovieService service;

    @PostMapping("/addMovie")
    public Movie addMovie(@RequestBody Movie movie) {
        return service.saveMovie(movie);
    }

    @PostMapping("/addMovies")
    public List<Movie> addMovies(@RequestBody List<Movie> movies) {
        return service.saveMovies(movies);
    }

    @GetMapping("/movies")
    public List<Movie> findAllMovies() {
        return service.getMovies();
    }

    @GetMapping("/movieById/{id}")
    public Movie findMovieById(@PathVariable int id) {
        return service.getMovieById(id);
    }

    @GetMapping("/movie/{name}")
    public Movie findMovieByName(@PathVariable String name) {
        return service.getMovieByName(name);
    }

    @PutMapping("/update")
    public Movie updateMovie(@RequestBody Movie movie) {
        return service.updateMovie(movie);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteMovie(@PathVariable int id) {
    	return service.deleteMovie(id);
    }
    }

