<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ColorRepository;

#[ORM\Entity(repositoryClass: ColorRepository::class)]
class Color
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?int $red = null;

    #[ORM\Column]
    private ?int $green = null;

    #[ORM\Column]
    private ?int $blue = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $createdAt = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getRed(): ?int
    {
        return $this->red;
    }

    public function setRed(int $red): static
    {
        $this->red = $red;

        return $this;
    }

    public function getGreen(): ?int
    {
        return $this->green;
    }

    public function setGreen(int $green): static
    {
        $this->green = $green;

        return $this;
    }

    public function getBlue(): ?int
    {
        return $this->blue;
    }

    public function setBlue(int $blue): static
    {
        $this->blue = $blue;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}
