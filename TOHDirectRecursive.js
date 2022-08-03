function tower(n, sourcePole, destinationPole, auxiliaryPole)
{
    if (0==n)
        return;

    tower (n-1, sourcePole, auxiliaryPole, destinationPole);
    
    document.write("Move the disk" + n + "from" + sourcePole + n +
    "to" + destinationPole + "<br>");

    tower(n-1, auxiliaryPole, destinationPole, sourcePole)
}

tower(3, 'S', 'D', 'A');