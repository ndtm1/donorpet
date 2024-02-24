package hackathon.service;

import hackathon.models.Pet;
import hackathon.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PetServiceImpl implements PetService{

    private PetRepository petRepository;

    @Autowired
    public PetServiceImpl(PetRepository petRepository) {
        this.petRepository = petRepository;
    }


    @Override
    public Pet registerPet(Pet pet) {
        return petRepository.save(pet);
    }
}
